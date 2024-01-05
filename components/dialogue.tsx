"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface FormData {
  email: string;
  subject: string;
  message: string;
}

export function DialogDemo() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // Add loading state
  const [success, setSuccess] = useState(false); // Add success state

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
    try {
      const response = await fetch("/api/datasub", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Data successfully saved
        // You might want to show a success message or perform other actions here
        setSuccess(true); // Set success state to true

        const timestamp = new Date().toLocaleString(); // Get the current timestamp
        const emailData = {
          to: "tjonesbusiness26@gmail.com",
          from: "tomjones@ecryptify.com",
          subject: "New Portfolio Contact Form Message!",
          text: `
            New Portfolio contact form submission on ${timestamp}!
            Email: ${formData.email}
            Subject : ${formData.subject}
            Message: ${formData.message}
          `,
        };

        try {
          const response = await fetch(
            "https://us-central1-ecryptify-4f739.cloudfunctions.net/emailSend",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(emailData),
            }
          );

          if (response.ok) {
          } else {
            // Handle unsuccessful email sending
            console.error("Error sending email");
          }
        } catch (error) {
          // Handle fetch error
          console.error("Fetch error:", error);
        }
      } else {
        // Handle error
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Contact Me </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Hey, Send Me a Message</DialogTitle>
          <DialogDescription>
            Send me a message and will get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        {success ? ( // Conditionally render success message if success state is true
          <h2 className="font-semibold mt-3 flex">
            <svg
              className="flex mr-2 animate-bounce"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 48 48"
            >
              <path
                fill="#c8e6c9"
                d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
              ></path>
              <path
                fill="#4caf50"
                d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"
              ></path>
            </svg>{" "}
            Success! Your message has been sent. I will get back to asap.
          </h2>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  required
                  type="email"
                  placeholder="tomj@dev.com"
                  className="col-span-3"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="subject" className="text-right">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Web Development Inquiry"
                  className="col-span-3"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="message" className="text-right">
                  Message
                </Label>
                <Textarea
                  name="message"
                  required
                  className="col-span-3"
                  placeholder="Type your message here."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">
                {loading ? ( // Conditionally render the spinner based on the loading state
                  <svg
                    aria-hidden="true"
                    className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-700"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                ) : (
                  "Send"
                )}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
