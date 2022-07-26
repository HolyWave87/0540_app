import styles from "./Profile.module.css";

const Profile = (props) => {
  let user = props.function ();
  console.log(user);
	return (
		<div className="row">
			<div className="col-md-3">
				<img
					src={user.avatar}
					alt=""
				/>
			</div>
			<div className="col-md-9">
				<h2>{user.name} {user.lastname}</h2>
				<p className={styles.about}>{user.about}</p>
				<p className={styles.user}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis accusantium similique
					quidem tempore reprehenderit est, perspiciatis esse dolorum possimus corrupti aut dicta,
					exercitationem error. Sint, obcaecati eaque! Distinctio, pariatur! Reiciendis.
				</p>
			</div>
		</div>
	);
};

export default Profile;
