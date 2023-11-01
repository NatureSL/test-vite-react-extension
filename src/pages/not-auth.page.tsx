import { UiButton } from "@/shared/ui/ui-button";
import { UiLogo } from "@/shared/ui/ui-logo";

export function NotAuthPage(){
    return <div className="p-8">
            <UiLogo/>
            <h2>No auth!</h2>
            <UiButton variant="primary">Sign In</UiButton>
    </div>
}