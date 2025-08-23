import { useParams, Navigate } from "react-router-dom";
import { getProductBySlug } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Star, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : null;

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const handlePurchaseClick = () => {
    window.open(product.affiliateUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              to="/" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para produtos
            </Link>
            
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              {product.category === "saude" && "Saúde & Bem-estar"}
              {product.category === "tecnologia" && "Tecnologia"}
              {product.category === "negocios" && "Negócios Online"}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {product.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              {product.content.introduction}
            </p>
            
            <Button 
              size="lg" 
              onClick={handlePurchaseClick}
              className="bg-secondary hover:bg-secondary-dark text-white text-lg px-8 py-4 shadow-secondary"
            >
              Quero Aproveitar Agora
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Por que {product.title} é a escolha certa?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {product.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button 
                size="lg" 
                onClick={handlePurchaseClick}
                className="bg-primary hover:bg-primary-dark text-white shadow-primary"
              >
                Comprar Agora
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Conheça {product.title} em Detalhes</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.content.detailedDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Como Usar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.content.howToUse}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              O que nossos clientes dizem
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.content.testimonials.map((testimonial, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">
                      "{testimonial}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Perguntas Frequentes
            </h2>
            
            <div className="space-y-6">
              {product.content.faq.map((item, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Diferenciais Únicos
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {product.content.differentials.map((differential, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{differential}</h3>
                </div>
              ))}
            </div>
            
            <Separator className="my-12" />
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">
                Pronto para transformar sua vida?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Junte-se a milhares de pessoas que já transformaram suas vidas com {product.title}. 
                Não perca mais tempo, comece sua jornada hoje mesmo!
              </p>
              
              <Button 
                size="lg" 
                onClick={handlePurchaseClick}
                className="bg-secondary hover:bg-secondary-dark text-white text-xl px-12 py-4 shadow-secondary"
              >
                Quero Começar Agora
                <ExternalLink className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;