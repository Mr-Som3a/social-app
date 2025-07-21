import User from "../model/user.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    // if(!user)res.status(404).json({message:'user not found'})
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: err.message });
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formmatedFriends = friends.map(
      ({
        _id,
        firstName,
        lastName,
        picturePath,
        location,
        occupation,
        friends,
        viewedProfile,
        impressions,
      }) => {
        return {
          _id,
          firstName,
          lastName,
          picturePath,
          location,
          occupation,
          friends,
          viewedProfile,
          impressions,
        };
      }
    );
    res.status(200).json(formmatedFriends);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// Updata & Delete
export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    if (user.friends.includes(friendId)) {
      user.friends.filter((friend) => friend._id !== friendId);
      friend.friends.filter((friend) => friend._id !== id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }
    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formmatedFriends = friends.map(
      ({
        _id,
        firstName,
        lastName,
        picturePath,
        location,
        occupation,
        friends,
        viewedProfile,
        impressions,
      }) => {
        return {
          _id,
          firstName,
          lastName,
          picturePath,
          location,
          occupation,
          friends,
          viewedProfile,
          impressions,
        };
      }
    );
    res.status(200).json(formmatedFriends);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};