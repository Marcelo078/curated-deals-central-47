import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <section id="produtos" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Produtos Cuidadosamente Selecionados
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada produto foi rigorosamente testado e aprovado por nossa equipe. 
              Qualidade garantida para resultados extraordinários.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 6).map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                slug={product.slug}
                category={product.category}
              />
            ))}
          </div>
        </section>

        <section className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-card">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Por que escolher nossos produtos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Testados & Aprovados</h3>
                <p className="text-muted-foreground">
                  Cada produto passa por rigorosos testes de qualidade e eficácia
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Alta Qualidade</h3>
                <p className="text-muted-foreground">
                  Apenas produtos premium que entregam resultados reais
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Garantia Total</h3>
                <p className="text-muted-foreground">
                  Satisfação garantida ou seu dinheiro de volta
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
