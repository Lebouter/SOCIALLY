import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="m-4">
      <h1>home page content</h1>
    </div>
  );
}
