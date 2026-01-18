"use client";

import { useState, useTransition } from "react";
import { User, Mail, MessageSquare, Briefcase, Layout, Database, Smartphone, Globe } from "lucide-react";
import { useForm } from "react-hook-form";
import { contactSchema, contactType } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { handleContactEmail } from "@/lib/actions/contact-actions";

export default function ContactForm() {
  // State management for the custom selection
  const [selectedType, setSelectedType] = useState("fullstack");

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setError] = useState("");

  // Data array moved outside the render loop for cleanliness
  const projectTypes = [
    { id: 'fullstack', label: 'Full Stack Web', icon: Globe, desc: 'End-to-end web solutions' },
    { id: 'mobile', label: 'Mobile App', icon: Smartphone, desc: 'iOS & Android development' },
    { id: 'backend', label: 'API & Backend', icon: Database, desc: 'Robust server architecture' },
    { id: 'frontend', label: 'UI/UX Design', icon: Layout, desc: 'Visuals & Interactions' },
  ];

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<contactType>(
    {
      resolver: zodResolver(contactSchema),
      defaultValues: {
        projectType: "fullstack"
      }
    }
  )


  const onSubmit = async (data: contactType) => {
    setError("");
    setIsLoading(true); // start loading
    try {
      const res = await handleContactEmail(data);
      if (!res.success) {
        throw new Error(res.message || "Something went wrong | Please try again later!");
      }
      router.push("/"); // redirect after success
    } catch (err: any) {
      setError(err.message || "Something went wrong | Please try again later!");
    } finally {
      setIsLoading(false); // stop loading
    }
  };

  return (
    <section className="bg-[#030712] py-8 px-8 selection:bg-blue-500/30">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6">
            Let&apos;s <span className="text-blue-500">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Ready to bring your next big idea to life? Fill out the form below
            and I&apos;ll get back to you to discuss the details.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-900/20 p-8 md:p-12 rounded-4xl border border-white/5 backdrop-blur-sm relative overflow-hidden">

          <input type="hidden" {...register("projectType")} />

          {/* Background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

          {/* Name */}
          <div className="space-y-3">
            <label className="text-[10px] font-bold text-slate-400 flex items-center gap-2 uppercase tracking-[0.2em]">
              <User size={14} className="text-blue-500" />
              Full Name
            </label>
            <input
              {...register("fullName")}
              type="text"
              placeholder="Your name"
              className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-4 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
            />
            {errors.fullName && (
              <p className="text-red-500">{errors.fullName?.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-3">
            <label className="text-[10px] font-bold text-slate-400 flex items-center gap-2 uppercase tracking-[0.2em]">
              <Mail size={14} className="text-blue-500" />
              Email Address
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="hello@example.com"
              className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-4 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
          </div>

          {/* Project Selection */}
          <div className="md:col-span-2 space-y-6 ">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 flex items-center gap-2 uppercase tracking-[0.2em]">
                <Briefcase size={14} className="text-blue-500" />
                What are we building?
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => {
                    setSelectedType(type.id);
                    setValue("projectType", type.id);
                  }}
                  className={`group relative flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 text-left cursor-pointer ${selectedType === type.id
                    ? "bg-blue-500/10 border-blue-500/50 ring-1 ring-blue-500/50"
                    : "bg-slate-900/50 border-white/5 hover:bg-slate-800/50 hover:border-blue-500/30"
                    }`}
                >
                  <div
                    className={`p-2 rounded-lg transition-colors ${selectedType === type.id
                      ? "bg-blue-500 text-white"
                      : "bg-slate-800 text-slate-400 group-hover:text-blue-400"
                      }`}
                  >
                    <type.icon size={20} />
                  </div>

                  <div key={type.id + "-text"}>  {/* <-- added key here */}
                    <div className="text-sm font-medium text-slate-200">{type.label}</div>
                    <div className="text-xs text-slate-500">{type.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-2 space-y-3">
            <label className="text-[10px] font-bold text-slate-400 flex items-center gap-2 uppercase tracking-[0.2em]">
              <MessageSquare size={14} className="text-blue-500" />
              Project Details
            </label>
            <textarea
              {...register("projectDescription")}
              rows={3}
              placeholder="Briefly describe your project requirements..."
              className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-4 text-slate-200 placeholder:text-slate-600 resize-none focus:outline-none focus:border-blue-500/50 transition-colors"
            />
            {errors.projectDescription && (
              <p className="text-red-500">{errors.projectDescription?.message}</p>
            )}
          </div>

          {/* Server Error! */}
          {err && (
            <p className="text-red-500">{err}</p>
          )}

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center gap-3 px-16 py-3 font-bold rounded-2xl bg-blue-600 hover:bg-blue-500 text-gray-200 shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-1 active:scale-95 cursor-pointer"
            >
              {isLoading ? "Sending request..." : "Send Inquiry"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}