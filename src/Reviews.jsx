import { Star } from "lucide-react"
import Testimonial from "./picture/testimonial.png"

const Reviews =() => {
  const testimonials = [
    {
      name: "Celine Dion",
      role: "Cafe Owner",
      image: Testimonial,
      testimonial: "Increase product sales and increase the amount of cash that comes in for further development",
    },
    {
      name: "Riana Madiya",
      role: "CEO Founder",
      image: Testimonial,
      testimonial:
        "The increase in product sales is exponential and takes place gradually, it's really a very good job",
    },
    {
      name: "John Melon",
      role: "Freelancer",
      image: Testimonial,
      testimonial: "As a business engaged in the field of digital artists and content creators, we are greatly helped",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <h2 className="text-4xl font-bold text-slate-700 max-w-md text-left font-poppins">They Satisfied With Our Service</h2>
        <div className="max-w-md">
          <h3 className="text-2xl font-semibold text-orange-500 mb-2 text-left font-poppins">Testimonials</h3>
          <p className="text-slate-600 text-left font-poppins">Have many related needs, we present a suitable package for you needs</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-slate-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-left font-poppins">{testimonial.name}</h4>
                <p className="text-slate-500 text-sm text-left font-poppins">{testimonial.role}</p>
              </div>
            </div>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
              ))}
            </div>
            <p className="text-slate-600 text-left font-poppins">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews;