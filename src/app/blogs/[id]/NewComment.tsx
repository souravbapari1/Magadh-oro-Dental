"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { addComment } from "./action";
import toast from "react-hot-toast";

interface Errors {
  name?: string;
  email?: string;
  comment?: string;
}

function NewComment({ id }: { id: string }) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});

  const muts = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      toast.dismiss();
      toast.success("Comment added successfully");
    },
    onError: () => {
      toast.dismiss();
      toast.error("Error adding comment");
    },
  });

  const validate = (): boolean => {
    let newErrors: Errors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!comment.trim()) newErrors.comment = "Comment cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      toast.dismiss();
      toast.loading("Adding Comment...");
      muts.mutate({
        blog_id: id,
        name,
        email,
        comment,
      });
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className=" lg:sticky top-28 ">
        <div className="grid md:grid-cols-2 gap-5 bg-primary/5 px-10 py-8 rounded-3xl">
          <div className="md:col-span-2">
            <h1 className="text-xl font-bold text-primary text-center">
              Leave A Comment
            </h1>
          </div>
          <div>
            <Label>Your Name</Label>
            <Input
              className="shadow-none bg-white border-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <Label>Email ID</Label>
            <Input
              className="shadow-none bg-white border-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="md:col-span-2">
            <Label>Your Comment</Label>
            <Textarea
              className="h-24 bg-white border-none shadow-none"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            {errors.comment && (
              <p className="text-red-500 text-sm">{errors.comment}</p>
            )}
          </div>
          <div className="md:col-span-2 flex justify-start items-center">
            <Button type="submit" disabled={muts.isPending}>
              Post A Comment
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewComment;
