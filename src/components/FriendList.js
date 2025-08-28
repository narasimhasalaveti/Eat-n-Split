import Friend from "./Friend";

export default function FriendList({
	friends,
	onSelection,
	selectedFriend,
	onDeleteItem,
}) {
	return (
		<ul>
			{friends.map((friend) => (
				<Friend
					friend={friend}
					key={friend.id}
					onSelection={onSelection}
					selectedFriend={selectedFriend}
					onDeleteItem={onDeleteItem}
				/>
			))}
		</ul>
	);
}
