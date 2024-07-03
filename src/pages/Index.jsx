import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <img src="https://placehold.co/1200x600" alt="Flamingos" className="w-full h-auto object-cover" />
        <h1 className="text-5xl font-bold">Welcome to the World of Flamingos</h1>
        <p className="text-xl text-muted-foreground">Discover the beauty and elegance of flamingos.</p>
        <Button size="lg" className="mt-4">Learn More</Button>
      </section>

      <Separator />

      {/* About Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-center">About Flamingos</h2>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <img src="https://placehold.co/600x400" alt="Flamingos" className="w-full md:w-1/2 h-auto object-cover" />
          <p className="text-lg text-muted-foreground">
            Flamingos are a type of wading bird in the family Phoenicopteridae. They are known for their vibrant pink feathers, long legs, and distinctive downward-bending beaks. Flamingos are found in both the Western Hemisphere and Eastern Hemisphere, and they typically inhabit shallow lakes, lagoons, mangrove swamps, and sandy islands.
          </p>
        </div>
      </section>

      <Separator />

      {/* Gallery Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-center">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <img src="https://placehold.co/600x400" alt="Flamingo 1" className="w-full h-auto object-cover" />
            <CardContent>
              <p className="text-center">Flamingo in the wild</p>
            </CardContent>
          </Card>
          <Card>
            <img src="https://placehold.co/600x400" alt="Flamingo 2" className="w-full h-auto object-cover" />
            <CardContent>
              <p className="text-center">Flamingo flock</p>
            </CardContent>
          </Card>
          <Card>
            <img src="https://placehold.co/600x400" alt="Flamingo 3" className="w-full h-auto object-cover" />
            <CardContent>
              <p className="text-center">Flamingo close-up</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <Input placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Textarea placeholder="Message" />
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </section>

      <Separator />

      {/* Footer */}
      <footer className="text-center space-y-4">
        <p className="text-muted-foreground">Follow us on social media</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-muted-foreground hover:text-foreground">Facebook</a>
          <a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a>
          <a href="#" className="text-muted-foreground hover:text-foreground">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;