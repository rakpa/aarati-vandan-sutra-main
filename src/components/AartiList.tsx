
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

export interface AartiItem {
  id: string;
  deity: string;
  title: string;
  thumbnail: string;
}

interface AartiListProps {
  aartis: AartiItem[];
}

const AartiList: React.FC<AartiListProps> = ({ aartis }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {aartis.map((aarti) => (
        <Link key={aarti.id} to={`/aarti/${aarti.id}`}>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-divine/20 hover:border-divine/40">
            <div className="h-48 bg-divine/10 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-divine-gold/20 flex items-center justify-center">
                <span className="text-4xl text-divine font-bold">{aarti.deity.charAt(0)}</span>
              </div>
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="text-lg font-semibold text-divine">{aarti.deity}</h3>
              <p className="mt-1 text-gray-600">{aarti.title}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default AartiList;
