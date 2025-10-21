import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Shield, Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              About Walen Tracking Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uganda's trusted partner in vehicle security and fleet intelligence
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are - Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Walen Safari Track, we believe every vehicle tells a story — where it's been, how it's used, and how it keeps your business moving. Yet too many companies in Uganda lose time and money because they can't see what's happening on the road. From unexpected breakdowns to fuel loss and driver misuse, small inefficiencies can turn into big costs.
                </p>
                <p>
                  That's the problem we set out to solve.
                </p>
                <p>
                  Our journey began with one goal — to bring smarter, simpler, and more affordable vehicle tracking to Uganda. We combine GPS technology, IoT telematics, and real-time analytics to help individuals and businesses monitor their vehicles anytime, anywhere. Whether you manage a few cars or an entire fleet, our platform gives you complete visibility, so you can reduce losses, improve safety, and make confident decisions every day.
                </p>
                <p>
                  What makes us different is our local expertise and reliability. We don't just sell tracking devices — we offer ongoing support, setup, and guidance tailored to Ugandan roads and realities. Our mission is to make smart tracking accessible to every driver and business, building a future where mobility is safer, more efficient, and fully connected.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                    <div className="text-sm text-muted-foreground">Vehicles Protected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Recovery Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Support Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Business Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To protect every vehicle in Uganda with reliable, affordable GPS tracking technology—empowering car owners, fleet managers, and boda riders with real-time visibility, control, and peace of mind. We exist to turn vehicle insecurity into confidence and confusion into clarity.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become East Africa's most trusted vehicle security partner—where every driver knows their vehicle is safe, every business runs efficiently, and vehicle theft becomes a thing of the past. We envision a future where tracking technology is standard, not optional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What Drives Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our values guide every decision we make and every solution we deliver
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Reliability</h3>
              <p className="text-muted-foreground">
                When your vehicle is at risk, our systems work—every time, without fail. We don't just promise protection, we deliver it.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Local Expertise</h3>
              <p className="text-muted-foreground">
                We understand Uganda's roads, traffic patterns, and security challenges. Our solutions are built for local realities, not imported blueprints.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Customer First</h3>
              <p className="text-muted-foreground">
                From installation to recovery assistance, we're with you every step. Your safety is our success, and your trust is our measure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Protect Your Vehicle?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of Ugandans who trust Walen with their vehicles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/256778711847"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-card border border-border text-foreground font-medium hover:bg-muted transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
