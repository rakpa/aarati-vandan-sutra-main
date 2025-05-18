
import React from 'react';
import Header from '@/components/Header';
import AartiList from '@/components/AartiList';
import { aartiData } from '@/data/aartis';
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      <div className="container mx-auto py-6 px-4">
        <Card className="mb-8 border-divine/20 p-6 bg-gradient-to-r from-divine/5 to-divine-gold/5 temple-bg">
          <h2 className="text-2xl md:text-3xl font-bold text-divine text-center mb-3">
            देवांच्या आरत्या
          </h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto">
            या अॅपमध्ये आपण विविध देवांच्या आरत्या वाचू शकता. प्रत्येक आरती मराठी भाषेत उपलब्ध आहे.
          </p>
        </Card>
        
        <div className="animate-glow">
          <AartiList aartis={aartiData} />
        </div>
      </div>
      
      <footer className="bg-divine text-white p-4 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-divine-accent">© 2025 देव आरती संग्रह. सर्व हक्क राखीव.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
