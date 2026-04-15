"use client";

import { createContext, useState, useMemo, useCallback, useEffect } from "react";
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc,
  Timestamp,
  query,
  orderBy
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Product, ProductData, Transaction, TransactionData, Testimonial, TestimonialData } from "@/types";
import { useToast } from "@/hooks/use-toast";

interface DashboardContextType {
  loading: boolean;
  products: Product[];
  addProduct: (product: ProductData) => Promise<void>;
  updateProduct: (id: string, updatedProduct: ProductData) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  transactions: Transaction[];
  addTransaction: (transaction: TransactionData) => Promise<void>;
  updateTransaction: (id: string, updatedTransaction: TransactionData) => Promise<void>;
  deleteTransaction: (id: string) => Promise<void>;
  testimonials: Testimonial[];
  addTestimonial: (testimonial: TestimonialData) => Promise<void>;
  deleteTestimonial: (id: string) => Promise<void>;
  totalIncome: number;
  totalExpenses: number;
  netBalance: number;
}

export const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const { toast } = useToast();

  const productsCollection = collection(db, "products");
  const transactionsCollection = collection(db, "transactions");
  const testimonialsCollection = collection(db, "testimonials");

  const fetchAllData = useCallback(async () => {
    setLoading(true);
    try {
      // Fetch products
      const productsSnapshot = await getDocs(query(collection(db, "products"), orderBy("name")));
      const productsList = productsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Product[];
      setProducts(productsList);

      // Fetch transactions
      const transactionsSnapshot = await getDocs(query(collection(db, "transactions"), orderBy("date", "desc")));
      const transactionsList = transactionsSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          date: (data.date as Timestamp).toDate(),
        }
      }) as Transaction[];
      setTransactions(transactionsList);

      // Fetch testimonials
      const testimonialsSnapshot = await getDocs(query(collection(db, "testimonials"), orderBy("name")));
      const testimonialsList = testimonialsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Testimonial[];
      setTestimonials(testimonialsList);

    } catch (error) {
      console.error("Error fetching data:", error);
      toast({
        variant: "destructive",
        title: "Error de Carga",
        description: "No se pudieron cargar los datos desde el backend.",
      });
    } finally {
      setLoading(false);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);
  
  const addProduct = async (productData: ProductData) => {
    const docRef = await addDoc(productsCollection, productData);
    setProducts(prev => [...prev, { id: docRef.id, ...productData }].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const updateProduct = async (id: string, updatedProductData: ProductData) => {
    const productDoc = doc(db, "products", id);
    await updateDoc(productDoc, updatedProductData);
    setProducts(prev => prev.map(p => p.id === id ? { id, ...updatedProductData } : p).sort((a, b) => a.name.localeCompare(b.name)));
  };
  
  const deleteProduct = async (id: string) => {
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc);
    setProducts(prev => prev.filter(p => p.id !== id));
  };
  
  const addTransaction = async (transactionData: TransactionData) => {
    const dataWithDate = {
      ...transactionData,
      date: new Date()
    };
    const docRef = await addDoc(transactionsCollection, dataWithDate);
    setTransactions(prev => [...prev, { ...dataWithDate, id: docRef.id }].sort((a, b) => b.date.getTime() - a.date.getTime()));
  };
  
  const updateTransaction = async (id: string, updatedTransactionData: TransactionData) => {
    const transactionDoc = doc(db, "transactions", id);
    // Keep original date on update
    const originalTx = transactions.find(t => t.id === id);
    if (!originalTx) return;

    const dataToUpdate = { ...updatedTransactionData, date: originalTx.date };
    await updateDoc(transactionDoc, dataToUpdate as any);
    setTransactions(prev => prev.map(t => t.id === id ? { ...originalTx, ...updatedTransactionData, id } : t).sort((a, b) => b.date.getTime() - a.date.getTime()));
  };

  const deleteTransaction = async (id: string) => {
    const transactionDoc = doc(db, "transactions", id);
    await deleteDoc(transactionDoc);
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  const addTestimonial = async (testimonialData: TestimonialData) => {
    const docRef = await addDoc(testimonialsCollection, testimonialData);
    setTestimonials(prev => [...prev, {id: docRef.id, ...testimonialData}].sort((a,b) => a.name.localeCompare(b.name)));
  };

  const deleteTestimonial = async (id: string) => {
    await deleteDoc(doc(db, "testimonials", id));
    setTestimonials(prev => prev.filter(t => t.id !== id));
  };


  const { totalIncome, totalExpenses, netBalance } = useMemo(() => {
    const totalIncome = transactions
      .filter(t => t.type === 'income')
      .reduce((acc, t) => acc + t.amount, 0);

    const totalExpenses = transactions
      .filter(t => t.type === 'expense')
      .reduce((acc, t) => acc + t.amount, 0);

    return { totalIncome, totalExpenses, netBalance: totalIncome - totalExpenses };
  }, [transactions]);


  const value = useMemo(() => ({
    loading,
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    transactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    testimonials,
    addTestimonial,
    deleteTestimonial,
    totalIncome,
    totalExpenses,
    netBalance
  }), [loading, products, transactions, testimonials, totalIncome, totalExpenses, netBalance]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
