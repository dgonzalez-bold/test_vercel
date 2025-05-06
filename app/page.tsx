import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              A
            </div>
            <span>Acme Inc</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Log in
            </Button>
            <Button size="sm">Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                The platform for modern teams
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Streamline your workflow, collaborate seamlessly, and achieve more together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row">
                <Button size="lg" className="gap-1">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Key Features</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Everything you need to take your team to the next level.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-3 p-6 bg-background rounded-lg shadow-sm"
                >
                  <div className="p-2 rounded-full bg-primary/10">{feature.icon}</div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to get started?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground">
                Join thousands of teams already using our platform to improve their workflow.
              </p>
              <Button size="lg" className="mt-4">
                Sign Up Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 font-bold">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                A
              </div>
              <span>Acme Inc</span>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Acme Inc. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Feature data
const features = [
  {
    title: "Seamless Collaboration",
    description: "Work together in real-time with your team from anywhere in the world.",
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
  },
  {
    title: "Powerful Analytics",
    description: "Gain insights into your team's performance with detailed analytics and reports.",
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
  },
  {
    title: "Secure & Reliable",
    description: "Your data is always safe with our enterprise-grade security infrastructure.",
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
  },
]
