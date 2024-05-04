"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  User,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
  Mail,
} from "lucide-react";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      {/*input*/}
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name"></Input>
        <User className="absolute right-6" size={20}></User>
      </div>
      {/*input*/}
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email"></Input>
        <MailIcon className="absolute right-6" size={20}></MailIcon>
      </div>
      {/*input*/}
      <div className="relative flex items-center">
        <Textarea  placeholder="Write Your Message Here..."></Textarea>
        <MessageSquare className="absolute top-4 right-6" size={20}></MessageSquare>
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]">
        Let's Talk<ArrowRightIcon size={20}></ArrowRightIcon>
      </Button>
    </form>
  );
};

export default Form;
