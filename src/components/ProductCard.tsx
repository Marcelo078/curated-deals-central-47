import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  title: string;
  description: string;
  slug: string;
  category: string;
}

export const ProductCard = ({ title, description, slug, category }: ProductCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "saude": return "bg-success/10 text-success border-success/20";
      case "tecnologia": return "bg-primary/10 text-primary border-primary/20";
      case "negocios": return "bg-secondary/10 text-secondary border-secondary/20";
      default: return "bg-accent/50 text-accent-foreground border-border";
    }
  };

  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      
      <CardHeader className="relative">
        <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mb-2 ${getCategoryColor(category)}`}>
          {category === "saude" && "Saúde & Bem-estar"}
          {category === "tecnologia" && "Tecnologia"}
          {category === "negocios" && "Negócios Online"}
        </div>
        
        <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        
        <CardDescription className="text-muted-foreground line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="relative">
        <Link to={`/${slug}`}>
          <Button 
            variant="outline" 
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
          >
            Saiba mais
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};