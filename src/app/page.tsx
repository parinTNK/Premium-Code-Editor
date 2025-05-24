import { SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,} from "@clerk/nextjs";

function Home() {
  return (
    <div>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal" />
        <SignUpButton mode="modal" />
      </SignedOut>
      <p className="text-2xl">Welcome to Next.js!</p>
    </div>
  )
}

export default Home