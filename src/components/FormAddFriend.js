import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onAddFriend }) {
	const [name, setName] = useState("");
	const [image, setImage] = useState("https://i.pravatar.cc/48?u=499476");

	function HandleSubmit(e) {
		e.preventDefault();

		if (!name.trim() || !image.trim()) return;

		const id = crypto.randomUUID();
		const newFriend = {
			name,
			image: `${image}?=${id}`,
			balance: 0,
			id,
		};

		onAddFriend(newFriend);

		setName("");
		setImage("https://i.pravatar.cc/48?u=499476");
	}

	return (
		<form className="form-add-friend" onSubmit={HandleSubmit}>
			<label>🧑‍🤝‍🧑Friendname</label>
			<input
				type="text"
				placeholder="Enter name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>

			<label>🖼️ Image URL</label>
			<input
				type="text"
				placeholder="Enter image URL"
				value={image}
				onChange={(e) => setImage(e.target.value)}
			/>

			<Button>Add</Button>
		</form>
	);
}
