import { Button } from "@/components/ui/button";

const Index = () => {
  const handleRedirect = () => {
    window.location.href = "https://lumidai.in";
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-5" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        <div className="text-center max-w-2xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl font-semibold text-foreground mb-4 animate-fade-in-up">
            We've Moved to a New Home
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg text-secondary mb-7 animate-fade-in-up animate-delay-200">
            Lumid AI is now available at Lumidai.in Please use the button below to continue.
          </p>
          
          {/* Redirect Button */}
          <div className="animate-fade-in-up animate-delay-400">
            <Button 
              variant="redirect"
              onClick={handleRedirect}
              className="mt-0"
            >
              Take me to Lumidai.in →
            </Button>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-accent bg-background py-8 px-5 text-center animate-fade-in animate-delay-600">
        <p className="text-sm text-muted">
          Same vision, smarter future — just at a new address.
        </p>
      </footer>
    </div>
  );
};

export default Index;
