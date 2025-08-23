import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";

export const Header = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="text-center text-white">
          <div className="flex justify-center items-center mb-4">
            <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
            <Star className="h-6 w-6 text-yellow-400 fill-yellow-400 mx-1" />
            <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
            <Star className="h-6 w-6 text-yellow-400 fill-yellow-400 mx-1" />
            <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
            <span className="ml-2 text-sm font-medium">Produtos Selecionados</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Conheça os melhores produtos
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              selecionados para você!
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Descubra produtos revolucionários que transformam vidas. Cada item foi cuidadosamente 
            selecionado para entregar resultados extraordinários.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-lg text-lg px-8 py-3"
              onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Heart className="mr-2 h-5 w-5" />
              Explorar Produtos
            </Button>
            
            <div className="flex items-center text-white/80 text-sm">
              <span className="block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              +10.000 pessoas já transformaram suas vidas
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </header>
  );
};