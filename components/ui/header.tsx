import { User } from "@clerk/backend";
import { UserButton } from "@clerk/nextjs";

export const Header = () => {
    return (
        <header className="bg-gradient-to-b to-blue-300 from-blue-700 px-4 py-8 lg:px-14 pb-36">
            <div className="max-w-screen-2xl mx-auto">
                <div className="flex flex-row justify-between">
                <div>Dropdown</div>
                <div>
                    <UserButton afterSignOutUrl="/sign-in" />
                </div>
                </div>
            </div>
        </header>
    )
}