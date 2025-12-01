import { startTransition, useActionState, useCallback } from "react";
import { acceptQuoteAction } from "./actions";

export function useAcceptQuote(uuid: string) {
	const [data, action, isPending] = useActionState(acceptQuoteAction, {});

	const acceptFn = useCallback(() => {
		const formData = new FormData();
		formData.append("uuid", uuid);
		startTransition(() => {
			action(formData);
		});
	}, [action, uuid]);

	return [data, acceptFn, isPending] as const;
}
