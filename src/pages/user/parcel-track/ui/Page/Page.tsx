import React, { useState } from "react";

export function ParcelTrack() {
  const [tCode, setTCode] = useState("");
  const [tInvoice, setTInvoice] = useState("");

  const tKey = import.meta.env.VITE_PARCEL_SERVICE_API_KEY;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new URLSearchParams();
    formData.append("t_key", tKey);
    formData.append("t_code", tCode);
    formData.append("t_invoice", tInvoice);

    // cors 정책 때문에 서비스택배의 템플릿을 쓸수 없기에 일단은 html을 받아서 억지로 창을 띄움
    // 추후에 백앤드 서버에서 프록시 서버를 이용하여 변경할 예정
    fetch("https://info.sweettracker.co.kr/tracking/5", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    })
      .then((response) => {
        if (response.ok) {
          return response.text(); // 응답을 텍스트로 받기 (HTML)
        }
        throw new Error("조회 실패");
      })
      .then((data) => {
        // 팝업 창을 열고 데이터를 전달
        const popupWindow = window.open("", "_blank", "width=800,height=600");

        if (popupWindow) {
          // 팝업 창에 CSS 링크 삽입
          popupWindow.document.write(`
            <head>
              <link rel="stylesheet" href="https://info.sweettracker.co.kr/webjars/github-com-twbs-bootstrap/v3.3.7/dist/css/bootstrap.min.css" />
              <link rel="stylesheet" href="https://info.sweettracker.co.kr/webjars/github-com-twbs-bootstrap/v3.3.7/dist/css/bootstrap-theme.css" />
              <link rel="stylesheet" href="https://info.sweettracker.co.kr/static/css/parcel/tracking-sky.css" />
            </head>
          `);
          popupWindow.document.write(data); // 응답 HTML을 팝업 창에 작성

          // 이미지 경로를 절대 경로로 수정
          const images = popupWindow.document.querySelectorAll("img");
          images.forEach((img) => {
            const src = img.getAttribute("src");
            if (src && src.startsWith("../../")) {
              img.setAttribute(
                "src",
                "https://info.sweettracker.co.kr" + src.substring(2)
              );
            }
          });

          popupWindow.document.close(); // 팝업 창 닫기
        }
      })
      .catch((error) => {
        console.error("오류 발생:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="t_code">택배사 코드</label>
        <input
          type="text"
          className="form-control"
          name="t_code"
          id="t_code"
          placeholder="택배사 코드"
          value={tCode}
          onChange={(e) => setTCode(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="t_invoice">운송장 번호</label>
        <input
          type="text"
          className="form-control"
          name="t_invoice"
          id="t_invoice"
          placeholder="운송장 번호"
          value={tInvoice}
          onChange={(e) => setTInvoice(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-default">
        조회하기
      </button>
    </form>
  );
}
