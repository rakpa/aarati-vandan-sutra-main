import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from 'lucide-react';
import AudioPlayer from './AudioPlayer';

interface AartiDetailProps {
  id: string;
  deity: string;
  title: string;
  content: string;
  audioUrl?: string;
}

const AartiDetail: React.FC<AartiDetailProps> = ({ deity, title, content, audioUrl }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // In a real app, we would save this to local storage or a database
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <Card className="overflow-hidden border-divine/20">
        <div className="bg-divine p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
              <p className="text-divine-accent mt-1">{deity}</p>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:text-divine-gold hover:bg-white/20"
              onClick={toggleFavorite}
            >
              <Heart className={`h-6 w-6 ${isFavorite ? 'fill-divine-gold' : ''}`} />
            </Button>
          </div>
        </div>
        
        {audioUrl && <AudioPlayer audioUrl={audioUrl} />}
        
        <CardContent className="p-6">
          <div className="aarti-text whitespace-pre-line">
            {(() => {
              const lines = content.split('\n').filter(line => line.trim() !== '');
              const elements = [];
              for (let i = 0; i < lines.length; i += 2) {
                elements.push(
                  <p key={i} className="mb-2">{lines[i]}</p>
                );
                if (lines[i + 1]) {
                  elements.push(
                    <p key={i + 1} className="mb-2">{lines[i + 1]}</p>
                  );
                }
                // Add extra space after every two lines, except after the last group
                if (i + 2 < lines.length) {
                  elements.push(
                    <div key={`space-${i}`} style={{ height: '1.5em' }} />
                  );
                }
              }
              return elements;
            })()}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AartiDetail;
