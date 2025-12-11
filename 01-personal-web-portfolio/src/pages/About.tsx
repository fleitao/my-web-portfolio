import SocialLinks from "@/components/SocialLinks";
import profilePhoto from "@/assets/profile-photo.jpg";

const timeline = [
  {
    year: "2021 - 2025",
    role: "Senior Partner Manager",
    company: "Great Company",
    description:
      "Enabled and supported global service providers.",
  },
  {
    year: "2020 - 2021",
    role: "Solutions Engineer",
    company: "Another Great Company",
    description:
      "Acted as SME and pre-sales lead for the API business, and prototyping solutions.",
  },
];

const patentsResearch = [
  {
    title: "Great invention",
    type: "Patent",
    number: "WO201817xxxxxx",
    year: "2018",
  },
  {
    title: "A great paper",
    type: "Paper",
    year: "2016",
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center md:items-stretch mb-16 animate-slide-up">
          {/* Bio */}
          <div className="flex-1 text-center md:text-left flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">About Me</h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hey, you just stumbled upon my personal website. I’m a technology leader with 15+ years at
              the crossroads of software, telecom, cloud communications, and customer experience. 
            </p>
            <SocialLinks />
          </div>

          {/* Profile Photo */}
          <div className="w-full md:w-64 lg:w-72 flex-shrink-0">
            <div className="w-full h-48 md:h-full rounded-lg overflow-hidden bg-muted border border-border">
              <img src={profilePhoto} alt="My Name" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Patents & Research Section */}
        <div className="mb-16 animate-slide-up" style={{ animationDelay: "150ms" }}>
          <h2 className="text-2xl font-display font-medium text-foreground mb-6">Patents & Research</h2>
          <div className="space-y-3">
            {patentsResearch.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-card border border-border rounded-lg px-5 py-4 hover:border-muted-foreground/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider px-2 py-1 bg-primary/10 rounded">
                    {item.type}
                  </span>
                  <span className="text-foreground">{item.title}</span>
                </div>
                <span className="text-sm text-muted-foreground">{item.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="animate-slide-up" style={{ animationDelay: "250ms" }}>
          <h2 className="text-2xl font-display font-medium text-foreground mb-8">Experience</h2>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-timeline-line" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-12 md:pl-16"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-timeline-dot border-2 border-background" />

                  {/* Content */}
                  <div className="bg-card border border-border rounded-lg p-5 hover:border-muted-foreground/30 transition-colors">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-medium text-foreground mt-1">{item.role}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.company}</p>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
