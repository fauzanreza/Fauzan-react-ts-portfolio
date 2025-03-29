

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Sample blog post data
const blogPosts = [
  // {
  //   id: 1,
  //   title: "Getting Started with React and TypeScript",
  //   excerpt: "A comprehensive guide to setting up and using React with TypeScript for beginners and experienced developers alike.",
  //   date: "June 15, 2023",
  //   category: "Development",
  //   imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
  // },
  // {
  //   id: 2,
  //   title: "The Power of CSS Grid in Modern Web Design",
  //   excerpt: "Exploring how CSS Grid has transformed the way we create complex layouts with minimal code and maximum flexibility.",
  //   date: "July 22, 2023",
  //   category: "Design",
  //   imageUrl: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=2070&auto=format&fit=crop",
  // },
  // {
  //   id: 3,
  //   title: "Optimizing Performance in Frontend Applications",
  //   excerpt: "Learn practical strategies to improve the performance of your web applications through code splitting, lazy loading, and more.",
  //   date: "August 10, 2023",
  //   category: "Performance",
  //   imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  // },
  // {
  //   id: 4,
  //   title: "User Experience: Designing for All Users",
  //   excerpt: "An in-depth look at accessibility and inclusive design practices that make your products usable for everyone.",
  //   date: "September 5, 2023",
  //   category: "UX Design",
  //   imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop",
  // },
  // {
  //   id: 5,
  //   title: "The Future of Web Development: What's Coming in 2024",
  //   excerpt: "Exploring upcoming trends, technologies, and frameworks that will shape the future of web development.",
  //   date: "October 18, 2023",
  //   category: "Trends",
  //   imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
  // },
];

const Blog = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar setIsContactOpen={setIsContactOpen}  />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Blog</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Thoughts, stories, and ideas about design, development, and technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.length === 0 ? (
              <div className="col-span-full text-center text-muted-foreground">
                There's no post yet.
              </div>
            ) : (
              <>
                {/* Featured Post */}
                <Card className="col-span-full bg-card shadow-lg overflow-hidden card-hover">
                  <div className="md:grid md:grid-cols-2 h-full">
                    <div className="h-60 md:h-full bg-cover bg-center" style={{ backgroundImage: `url(${blogPosts[0].imageUrl})` }} />
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <div className="text-sm font-medium text-primary mb-2">
                        {blogPosts[0].category} • {blogPosts[0].date}
                      </div>
                      <h2 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h2>
                      <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                      <button className="btn-primary w-fit">Read More</button>
                    </div>
                  </div>
                </Card>

                {/* Regular Posts */}
                {blogPosts.slice(1).map((post) => (
                  <Card key={post.id} className="overflow-hidden card-hover">
                    <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.imageUrl})` }} />
                    <div className="p-6">
                      <div className="text-sm font-medium text-primary mb-2">
                        {post.category} • {post.date}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      <button className="btn-secondary">Read More</button>
                    </div>
                  </Card>
                ))}
              </>
            )}
          </div>
          
          {/* <div className="mt-16 max-w-4xl mx-auto">
            <Separator className="mb-8" />
            <h2 className="text-2xl font-bold mb-6">Subscribe to the Newsletter</h2>
            <div className="bg-card p-8 rounded-lg shadow-md">
              <p className="text-muted-foreground mb-4">
                Get the latest articles, tutorials, and updates delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <button className="btn-primary shrink-0">Subscribe</button>
              </div>
            </div>
          </div> */}
        </div>
      </main>

      {/* Contact Modal */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <Contact />
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Blog;
