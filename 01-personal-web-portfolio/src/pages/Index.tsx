import ImageSlideshow from "@/components/ImageSlideshow";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="relative min-h-screen pt-16">
      {/* Background Slideshow */}
      <div className="absolute inset-0 top-16">
        <ImageSlideshow />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6">
        <div className="text-center max-w-3xl animate-slide-up">
          {/* Quote */}
          <blockquote className="mb-8">
            <p className="text-2xl md:text-4xl lg:text-5xl font-display italic text-foreground leading-relaxed">
              "This is your inspirational quote..."
            </p>
          </blockquote>

          {/* Name */}
          <h1 className="text-lg md:text-xl font-medium text-foreground mt-12 tracking-wide">Your Name</h1>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            Engineer • Plant Lover • Great Guy
          </p>

          {/* Social Links */}
          <SocialLinks className="justify-center mt-8" iconSize={22} />
        </div>
      </div>
    </div>
  );
};

export default Index;
