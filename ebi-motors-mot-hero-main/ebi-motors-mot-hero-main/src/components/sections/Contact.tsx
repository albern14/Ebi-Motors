import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+44 7894 458796",
      description: "Mon-Fri: 8AM-6PM, Sat: 8AM-4PM"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Unit C, 229 Ayres Road",
      description: "Manchester, M16 0WZ"
    },
    {
      icon: Clock,
      title: "Opening Hours",
      content: "Monday - Saturday",
      description: "Book your MOT in advance"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@ebimotors.co.uk",
      description: "We'll get back to you within 24 hours"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimation direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to book your MOT or have questions? Contact us today and experience 
              professional automotive care in Manchester.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <ScrollAnimation key={index} direction="up" delay={index * 150}>
              <Card className="text-center h-full shadow-soft hover:shadow-strong transition-all duration-300 hover:scale-105 border-primary/20">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground mb-2">
                    {info.content}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation direction="up">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-strong border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-foreground">
                  Ready to Book Your MOT?
                </CardTitle>
                <p className="text-muted-foreground">
                  Call us now or visit our garage for immediate assistance
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                    <Phone className="mr-2 h-5 w-5" />
                    Call: +44 7894 458796
                  </Button>
                  <Button variant="cta" size="lg" className="text-lg px-8 py-4">
                    <MapPin className="mr-2 h-5 w-5" />
                    Get Directions
                  </Button>
                </div>
                
                <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3 text-center">
                    📍 Find Us Here
                  </h3>
                  <div className="text-center space-y-1">
                    <p className="text-foreground font-medium">Ebi Motors UK Limited</p>
                    <p className="text-muted-foreground">Unit C, 229 Ayres Road</p>
                    <p className="text-muted-foreground">Manchester, M16 0WZ</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};