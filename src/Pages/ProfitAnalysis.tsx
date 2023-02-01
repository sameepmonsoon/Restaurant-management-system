import ProfitAnalysisReport from "../Components/ProfitAnalysis/ProfitAnalysisReport";
import { BsTag } from "react-icons/bs";
import { AiOutlineLineChart } from "react-icons/ai";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { BsCartX, BsCartCheck } from "react-icons/bs";
import { TbCalendarStats } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";

const ProfitAnalysis = () => {
  return (
    <>
      <div
        style={{
          display: "flex;",
          flexFlow: "row wrap;",
          backgroundColor: "red;",
        }}>
        <ProfitAnalysisReport
          cardTitle={"Purchase"}
          icon1={<MdOutlineShoppingCart size={30} />}
          icon2={<BsCartX size={30} />}
          icon3={<HiOutlineCurrencyRupee size={30} />}
          icon4={<BsCartCheck size={30} />}
          title1={"Total purchase"}
          title2={"Cancel Order "}
          title3={"Cost"}
          title4={"Pre order"}
          amount1={123}
          amount2={111}
          amount3={1233}
          amount4={123}
        />
        <br />

        <ProfitAnalysisReport
          cardTitle={"Sales"}
          icon1={<BsTag size={30} />}
          icon2={<TbCalendarStats size={30} />}
          icon3={<HiOutlineCurrencyRupee size={30} />}
          icon4={<AiOutlineLineChart size={30} />}
          title1={"Total purchase"}
          title2={"Total Due"}
          title3={"Cost"}
          title4={"Profit"}
          amount1={10000000111100}
          amount2={111}
          amount3={1233}
          amount4={123}
        />
        <br />
        <ProfitAnalysisReport cardTitle={"stock"} />

        <br />
      </div>
    </>
  );
};

export default ProfitAnalysis;
