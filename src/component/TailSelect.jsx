

export default function TailSelect({selRef,handleSel,dText, opv, opt}) {
  return (
    <div>
      <select className="bg-gray-50 border mx-2 border-gray-300 text-gray-900
                         text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                         block p-2.5"
              defaultValue=""
              ref = {selRef}
              onChange={handleSel}>
        <option value="">{dText}</option>
                    {
                        opv.map((item, idx) => (
                                                <option key={item} value={item}>
                                                            {opt[idx]}
                                                </option>
                                                ))
                     }
      </select>
    </div>
  )
}
