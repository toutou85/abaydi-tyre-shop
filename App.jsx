import { useState } from "react";

const wilayas = [
  { name: "أدرار", price: 800 },
  { name: "الشلف", price: 700 },
  { name: "الأغواط", price: 750 },
  { name: "أم البواقي", price: 600 },
  { name: "باتنة", price: 650 },
  { name: "بجاية", price: 850 },
  { name: "بسكرة", price: 700 },
];

function App() {
  const [open, setOpen] = useState(false);
  const [selectedWilaya, setSelectedWilaya] = useState("");
  const [deliveryPrice, setDeliveryPrice] = useState(0);

  const handleWilayaChange = (e) => {
    const wilayaName = e.target.value;
    setSelectedWilaya(wilayaName);
    const wilaya = wilayas.find((w) => w.name === wilayaName);
    setDeliveryPrice(wilaya ? wilaya.price : 0);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex items-center justify-between bg-white p-4 shadow rounded-2xl mb-6">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="شعار المتجر" className="h-12 w-12" />
          <h1 className="text-2xl font-bold">عبايدي للعجلات</h1>
        </div>
      </header>

      <div className="max-w-md mx-auto bg-white p-4 shadow-xl rounded-2xl">
        <img src="/tyre.jpg" alt="الإطار" className="w-full h-48 object-cover rounded-xl mb-4" />
        <p>الرقم: 12345</p>
        <p>العلامة التجارية: Michelin</p>
        <p>السعر: 5000 دج</p>
        <p>الكمية المتوفرة: 20</p>
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl w-full mt-4 hover:bg-blue-700"
        >
          اطلب الآن
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-80 space-y-3 relative">
            <h2 className="text-lg font-bold mb-2">معلومات الطلب</h2>
            <input className="border p-2 rounded w-full" placeholder="الاسم واللقب" />
            <input className="border p-2 rounded w-full" placeholder="رقم الهاتف" />
            <input className="border p-2 rounded w-full" placeholder="رقم الإطار" defaultValue="12345" />
            <input className="border p-2 rounded w-full" placeholder="نوع العلامة التجارية" defaultValue="Michelin" />
            <input className="border p-2 rounded w-full" placeholder="الكمية المطلوبة" type="number" />
            <select className="border p-2 rounded w-full" onChange={handleWilayaChange}>
              <option value="">اختر الولاية</option>
              {wilayas.map((w) => (
                <option key={w.name} value={w.name}>{w.name}</option>
              ))}
            </select>
            {selectedWilaya && (
              <p className="text-green-600">ثمن التوصيل: {deliveryPrice} دج</p>
            )}
            <div className="flex justify-between mt-4">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={() => alert("تم إرسال الطلب بنجاح")}
              >
                تأكيد
              </button>
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                onClick={() => setOpen(false)}
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
