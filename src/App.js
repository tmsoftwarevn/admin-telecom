import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Login from "./page/login/Login";
import LayoutAdmin from "./page/admin/Layout/LayoutAdmin";
import ThongKe from "./component/thong-ke/ThongKe";
import LichSuCuocGoi from "./component/lich-su-cuoc-goi/LichSuCuocGoi";
import DanhBa from "./component/danh-ba/DanhBa";
import PhongBan from "./component/phong-ban/PhongBan";
import Nhanvien from "./component/nhan-vien/NhanVien";
import LichSuCuocGoiCaNhan from "./component/lich-su-cuoc-goi/LichSuCuocGoiCaNhan";
import DanhBaNoiBo from "./component/danh-ba/DanhBaNoiBo";
import ImportFile from "./component/Import file/ImportFile";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/admin",
      element: <LayoutAdmin />,
      children: [
        { index: true, element: <ThongKe /> },
        {
          path: "thong-ke",
          element: <ThongKe />
        },
        {
          path: "danh-ba",
          element: <DanhBa />
        },
        {
          path: "danh-ba-import",
          element: <ImportFile />
        },
        {
          path: "danh-ba-noi-bo-import",
          element: <ImportFile />
        },
        {
          path: "danh-ba-noi-bo",
          element: <DanhBaNoiBo />
        },
        {
          path: "lich-su-cuoc-goi",
          element: <LichSuCuocGoi />
        },
        {
          path: "lich-su-cuoc-goi-ca-nhan",
          element: <LichSuCuocGoiCaNhan />
        },
        {
          path: "phong-ban",
          element: <PhongBan />
        }
        ,{
          path:"nhan-vien",
          element: <Nhanvien />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
