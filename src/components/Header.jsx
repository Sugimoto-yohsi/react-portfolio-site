import CoverImage from '../images/cover-image.jpg'
import ProfileImage from '../images/profile-image.png'

export const Header = () => {
  const componentName = () => 'Header';

  return (
    <div className="test-wrapper">
      <p className="text">
        このコンポーネントの名前は{componentName()}です。
      </p>
    </div>
  );
};
