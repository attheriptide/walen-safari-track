import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BookDemo from "@/components/BookDemo";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Satellite, Users, Shield, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Quick Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Real-Time GPS Tracking. Fleet Management. Vehicle Security.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We help Ugandans protect their vehicles, manage their fleets, and recover stolen property—with technology that works in real conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Satellite className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">5000+ Vehicles Protected</h3>
                <p className="text-muted-foreground">
                  From personal cars to commercial fleets across Uganda
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">98% Recovery Rate</h3>
                <p className="text-muted-foreground">
                  When theft happens, we help you get your vehicle back
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Our team is always ready to help—day or night
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                What We Do
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Walen Tracking Solutions provides GPS tracking and vehicle security systems designed for Uganda's roads, traffic, and security challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Track Every Move</h3>
                    <p className="text-muted-foreground">Real-time location updates for cars, fleets, and boda bodas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Prevent & Recover Theft</h3>
                    <p className="text-muted-foreground">Smart alarms, remote engine cut-off, and fast recovery support</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Manage Fleets Smarter</h3>
                    <p className="text-muted-foreground">Monitor drivers, optimize routes, track fuel, and cut costs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Expert Consultancy</h3>
                    <p className="text-muted-foreground">We help you build a culture of vehicle safety and accountability</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  Explore All Services
                </Link>
              </div>
            </div>
            <div>
              <Card className="bg-card border-border shadow-xl">
                <CardContent className="p-0">
                  <img 
                    src="/assets/hero-dashboard.jpg" 
                    alt="Walen GPS Tracking Dashboard"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <WhyChooseUs />
      <Testimonials />
      <BookDemo />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
