import "./infosetting.scss";
import { CiShoppingTag } from "react-icons/ci";

const InfoSetting = () => {
  return (
    <div className="infosetting">
      <div className="infosetting__info flex gap-3 items-center p-2">
        <CiShoppingTag className="text-xl" />
        <div className="infosetting__info__group">
          <div className="text-xl font-semibold">Công ty YTIUER TRET</div>
          <div>Nguyễn An</div>
          <div>0123456789 - nguyenan@gmail.com</div>
        </div>
      </div>
      <div className="infosetting__name px-2 py-3 flex gap-2">
        <CiShoppingTag className="text-xl" />
        <div>HGFHG 453</div>
      </div>
      <div className="infosetting__name px-2 py-3 flex gap-2">
        <CiShoppingTag className="text-xl" />
        <div>HGFHG 453</div>
      </div>
      <div className="infosetting__name px-2 py-3 flex gap-2">
        <CiShoppingTag className="text-xl" />
        <div>HGFHG 453</div>
      </div>
      <div className="infosetting__btn flex justify-between py-3 px-4">
      <div className="infosetting__btn__changepass cursor-pointer">Đổi mật khẩu</div>
      <div className="infosetting__btn__logout text-red-500 cursor-pointer">Đăng xuất</div>
      </div>
      
    </div>
  );
};

export default InfoSetting;
