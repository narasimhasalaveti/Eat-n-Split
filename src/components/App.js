import { useState } from "react";
import Button from "./Button";
import EmptyList from "./EmptyList";
import FriendList from "./FriendList";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";

export default function App() {
	const [friends, setFriends] = useState([]);
	const [showAddFriend, setShowAddFriend] = useState(false);
	const [selectedFriend, setSelectedFriend] = useState(null);

	function HandleShowAddFriend() {
		setShowAddFriend((show) => !show);
	}

	function HandleAddFriend(friend) {
		setFriends((friends) => [...friends, friend]);
		setShowAddFriend(false);
	}

	function HandleSelection(friend) {
		setSelectedFriend((cur) => (cur?.id === friend?.id ? null : friend));
		setShowAddFriend(false);
	}

	function HandleSplitBill(value) {
		setFriends((friends) =>
			friends.map((friend) =>
				friend?.id === selectedFriend?.id
					? { ...friend, balance: friend?.balance + value }
					: friend
			)
		);

		setSelectedFriend(null);
	}

	function HandleDeleteFriend(friend) {
		setFriends((friends) => friends.filter((f) => f.id !== friend.id));
		setSelectedFriend(null);
	}

	return (
		<div className="app">
			<div className="sidebar">
				{friends.length === 0 ? (
					<EmptyList />
				) : (
					<FriendList
						friends={friends}
						onSelection={HandleSelection}
						selectedFriend={selectedFriend}
						onDeleteItem={HandleDeleteFriend}
					/>
				)}

				{showAddFriend && <FormAddFriend onAddFriend={HandleAddFriend} />}

				<Button onClick={HandleShowAddFriend}>
					{showAddFriend ? "Close" : "Add Friend"}
				</Button>
			</div>

			{selectedFriend && (
				<FormSplitBill
					selectedFriend={selectedFriend}
					onSplitBill={HandleSplitBill}
				/>
			)}
		</div>
	);
}
