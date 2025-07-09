import { useEffect, useRef, useState } from "react";
import TailSearch from "../component/TailSearch";
import TailCard from "../component/TailCard";

export default function Gallery() {
  const kwRef = useRef();
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);
  // const [tag, setTag] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apikey="3%2BE64HB9bUOY0%2BkENLpf5w9Uk98vLoG4XULi9AjodZWxJpAFaeggyJGYnMdjYepgzAO%2Bjv%2FAty5BZhgDBQfdyw%3D%3D"

  // 🔍 확인 버튼 클릭 시
  const handleOk = (e) => {
    e.preventDefault();
    const kw = kwRef.current.value.trim();
    if (!kw) return alert("검색어를 입력하세요.");
    setKeyword(kw);
  };

  // ❌ 취소 버튼 클릭 시
  const handleCancel = (e) => {
    e.preventDefault();
    kwRef.current.value = "";
    setKeyword("");
    setData([]);
    setError(null);
  };

  // 📡 keyword가 바뀔 때 API 호출
  useEffect(() => {
    if (!keyword) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${apikey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${encodeURIComponent(
          keyword
        )}&_type=json`;

        //데이터가져오기
        const res = await fetch(url);
        const result = await res.json();
        setData(result.response.body.items?.item || []);
      } catch (err) {
        console.error(err);
        setError("데이터를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [keyword]);

  return (
    <div>
    <div className="mt-8 h-30 flex flex-col justify-center items-center border border-gray-300 p-10 rounded-xl">
      <h2 className="font-bold mb-2 text-gray-700">관광사진갤러리 키워드 검색</h2>

        <TailSearch kwRef={kwRef} 
                    onOk={handleOk} 
                    onCancel={handleCancel} />
    </div>
    <div>
        <TailCard data={data} 
                  loading={loading} 
                  error={error} 
                  keyword={keyword} />
    </div>
    </div>
  );
}
