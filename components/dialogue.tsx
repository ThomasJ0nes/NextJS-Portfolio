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

export function DialogDemo() {
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
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Email
            </Label>
            <Input
              id="Email"
              type="email"
              placeholder="tomj@dev.com"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Subject
            </Label>
            <Input
              id="subject"
              placeholder="Web Developmemt Enquiry"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Message
            </Label>
            <Textarea
              className="col-span-3"
              placeholder="Type your message here."
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Send </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
