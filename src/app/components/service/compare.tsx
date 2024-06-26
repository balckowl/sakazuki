const Compare = () => {
  const companyInfoList = [
    ["項目A", "×", "〇", "◎"],
    ["項目B", "〇", "△", "◎"],
    ["項目C", "△", "×", "〇"],
    ["項目D", "×", "〇", "◎"],
  ];


  return (
    <div className="pb-[100px]">
      <div className="container">
        {/* pre-heading */}
        <div className="w-max">
          <h3 className="mb-[2px] text-xl">他社比較</h3>
          <div className="flex items-center w-full mb-12">
            <div className="h-[4px] bg-[#1e4593] w-[18px]"></div>
            <div className="h-[4px] bg-[#69c2ec] flex-grow"></div>
          </div>
        </div>
        <div className="mx-auto md:w-[80%]">
          <table className="w-full border-collapse border border-blue-300">
            <thead>
              <tr className="bg-blue-200">
                <th className="w-[20%] p-3 font-bold border border-blue-300"></th>
                <th className="w-[20%] p-3 font-bold border border-blue-300"><p>A社</p></th>
                <th className="w-[20%] p-3 font-bold border border-blue-300"><p>B社</p></th>
                <th className="w-[20%] p-3 font-bold border border-blue-300 bg-yellow-400"><p>sakazuki</p></th>
              </tr>
            </thead>
            <tbody>
              {companyInfoList.map((companyInfo, index) => (
                <tr key={index}>
                  {companyInfo.map((score, jndex) => (
                    <td
                      key={jndex}
                      className={`w-[20%] p-3 font-bold border border-blue-300 ${jndex == 3 && "bg-yellow-200"}`}>
                      {score && jndex != 0 ? <img src={
                        `${score == "×" ? "/images/service/batu.png" :
                          score == "△" ? "/images/service/sankaku.png" :
                            score == "〇" ? "/images/service/maru.png" :
                              score == "◎" && "/images/service/nizyumaru.png"}
                          `} className="mx-auto w-[30px] h-[30px]" alt={score} /> :
                        <p className="text-center">{score}</p>
                      }
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Compare;