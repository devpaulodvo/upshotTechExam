'use client';
import { React, useState } from "react";
import styles from "./index.module.css";
import Image from 'next/image';
import companyLogo from "../images/upshotlogo.png";
import dashboardIcon from "../images/ic_Dashboard.png";
import leaderboardIcon from "../images/ic_Leaderboard.png";
import spreadsheetIcon from "../images/ic_Spreadsheets.png";
import administrationIcon from "../images/ic_Administration.png";
import scheduleIcon from "../images/ic_Schedule.png";
import messagesIcon from "../images/ic_Messages.png";
import libraryIcon from "../images/ic_Library.png";
import settingsIcon from "../images/ic_Settings.png";
import supportIcon from "../images/ic_Support.png";
import searchIcon from "../images/searchIcon.png";
import bellIcon from "../images/Shapebell.png";
import avatarIcon from "../images/avatar.png";
import arrowDown from "../images/Rectanglearrowdown.png";
import generateReport from "../images/GenerateReport.png";
import shapeHit from "../images/ShapeHit.png";
import shapeBag from "../images/ShapeBag.png";
import {Roboto } from "@next/font/google";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement
} from "chart.js";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'; 

const roboto = Roboto({
  subsets:['latin'],
  weight:['400', '700'],
});

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
)

export default function Page() {
  const percentage = 68;
  const anotherPercentage = 76;

  const [overviewCategory, setoverviewCategory] = useState(5)

  const WeeklyData = [
    {
      id: 1,
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] ,
      data: [-1, 0.05, 0.3, 0.4, 0.7, 0.1, 0.8]
    }
  ]

  const MonthlyData = [
    {
      id: 2,
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] ,
      data: [-1, 0.05, 0.3, 0.4, 0.7, 0.1, 0.8, 0.3, 0.4, 0.7, 0.1, 0.8]
    }
  ]

  const YearlyData = [
    {
      id: 3,
      labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'] ,
      data: [-1, 0.3, 0.4, 0.7, 0.8, 0.3, 0.4, 0.7, 0.1, 0.8]
    }
  ]

  const [APLS, setAPLS] = useState(MonthlyData);
  const [sectorToggle, setSectorToggle] = useState(false)
  
  const dummyData1 = [
      {
        count: 27632,
        percentage: 2.5,
        prevCount: 21340
      },
      {
        count: 20199,
        percentage: 0.5,
        prevCount: 19000
      },
      {
        count: 110,
        percentage: -1.5,
        prevCount: 165
      },
      {
        count: '7d:12hr',
        percentage: 2.5,
        prevCount: '12d:8hr'
      }
    ]

  const activeManagers = [
    {
      count: 10254,
      percentage: 1.5
    }
  ]

  const data = {
    labels: APLS[0].labels,
    datasets: [
      {
        label: "",
        data: APLS[0].data,
        backgroundColor: '#1C1C24',
        borderColor: '#3DD598',
        pointBorderColor: 'aqua',
        fillColor: '#1C1C24',
        tension: 0.4,
        pointBackgroundColor: '#3DD598',
        pointRadius: 0
      }
    ]
  }

  const options = {
    plugins:{
      legend: true
    },
    scales: {
      y:{
        min:-1,
        max: 1,
        ticks: {
          stepSize: 0.5
        }
      }
    },
    maintainAspectRatio: false
  }

  const dummydata = {
    labels: YearlyData[0].labels,
    datasets: [
      {
        data: YearlyData[0].data,
        backgroundColor: '#1C1C24',
        borderColor: '#0062FF',
        tension: 0.4,
        pointBackgroundColor: '#3DD598',
        pointRadius: 0
      }
    ]
  }

  const dummyoptions = {
    plugins:{
      legend: true

    },
    scales: {
      y:{
        min:-1,
        max: 1,
        ticks: {
          stepSize: 0.5
        },
        display: false
      },
      x:{
        display: false
      }
    },
    maintainAspectRatio: false,
  }
  
  return(
    <div className={`${styles.container} flex`}>
        {/* Start of Sidebar */}
      <div className={`${styles.sidebar}`}>
        <div className={`${styles.logoContainer}`}>
          <Image src={companyLogo} alt="companyLogo" loading="eager" priority={true}/>
        </div>
        <div className={`${styles.mainNav}`}>
          <h1 className={`text-gray-600 font-semibold`}>MAIN</h1>
          <ul className={`${styles.ul}`}>
            <li>
              <Image className={`${styles.icon}`} src={dashboardIcon} alt="dashboard" loading="eager" priority={true}/>
              Overview
            </li>
            <li>
              <Image className={`${styles.icon}`} src={leaderboardIcon} alt="leaderboard" loading="eager" priority={true}/>
              Leaderboard
            </li>
            <li>
              <Image className={`${styles.icon}`} src={spreadsheetIcon} alt="spreadsheet" loading="eager" priority={true}/>
              Spreadsheet
            </li>
            <li>
              <Image className={`${styles.icon}`} src={administrationIcon} alt="administration" loading="eager" priority={true}/>
              Administrator
            </li>
            <li>
              <Image className={`${styles.icon}`} src={scheduleIcon} alt="schedule" loading="eager" priority={true}/>
              Schedule
            </li>
          </ul>
        </div>
        <div className={`${styles.helpNav}`}>
          <h1 className={`text-gray-600 font-semibold`}>Help</h1>
          <ul className={`${styles.ul}`}>
            <li>
              <Image className={`${styles.icon}`} src={messagesIcon} alt="messages" loading="eager" priority={true}/>
              Messages
            </li>
            <li>
              <Image className={`${styles.icon}`} src={libraryIcon} alt="library" loading="eager" priority={true}/>
              Leaderboard
            </li>
            <li>
              <Image className={`${styles.icon}`} src={settingsIcon} alt="settings" loading="eager" priority={true}/>
              Spreadsheet
            </li>
            <li>
              <Image className={`${styles.icon}`} src={supportIcon} alt="support" loading="eager" priority={true}/>
              Administrator
            </li>
          </ul>
        </div>
      </div>
      {/* End of Sidebar */}
      <div className={`${styles.body}`}>
        {/*Start of Top Header */}
        <div className={`${styles.headbar} flex justify-between`}>
          <div className={`${styles.searchbar} flex items-center self-center`}>
            <Image width={20} height={20} src={searchIcon} alt="search" loading="eager" priority={true}/>
            <input placeholder="Search..." type="text" className={`${styles.inputField}`}/>
          </div>
          <div className={`${styles.accountProfile} flex items-center self-center`}>
            <Image className={styles.bellIcon} src={bellIcon} alt="bell" loading="eager" priority={true}/>
            <Image width={30} height={30} className={styles.avatarIcon} src={avatarIcon} alt="avatar" loading="eager" priority={true}/>
            <div className={`${styles.accountDetails} flex flex-col`}>
              <label className={`${styles.accountName}`}>Austin Robertson</label>
              <label className={`text-xs text-gray-600`}>Human Resource Manager</label>
            </div>
            <Image src={arrowDown} width="auto" height="auto" alt="arrowdown" loading="eager" priority={true}/>
          </div>
        </div>
        {/* End of Top Header */}
        {/* Start of Overview Content */}
        <div className={`${styles.overViewHeader} flex justify-between`}>
          <div className={`${styles.overviewContainer} flex items-center self-center`}>
            <h1 className={`${styles.overviewText} font-semibold text-2xl text-white`}>Overview</h1>
            <label className={`${roboto.className} text-gray-600 font-normal`}>Show: <span className={`text-slate-50`}>Same Sector</span></label>
            <div className={styles.dropdownSectors}>
              <Image src={arrowDown} className={styles.arrowDown} width="auto" height="auto"  alt="arrowdown" loading="eager" priority={true}/>
              <ul className={`${styles.dropdownSector} ${roboto.className} flex justify-center`}>
                <li className={`${overviewCategory == 1 && styles.dropdownSelectorActive}`}><input onChange={()=>{setoverviewCategory(1)}} checked={overviewCategory == 1 && true} className={`${styles.radioButton}`} type="radio" id="boss" name="overview" value="boss"/><span className={styles.radioButtonText}>Same Boss</span></li>
                <li className={`${overviewCategory == 2 && styles.dropdownSelectorActive}`}><input onChange={()=>{setoverviewCategory(2)}} checked={overviewCategory == 2 && true} className={`${styles.radioButton}`} type="radio" id="joblvl" name="overview" value="joblvl"/><span className={styles.radioButtonText}>Same Job Level</span></li>
                <li className={`${overviewCategory == 3 && styles.dropdownSelectorActive}`}><input onChange={()=>{setoverviewCategory(3)}} checked={overviewCategory == 3 && true} className={`${styles.radioButton}`} type="radio" id="department" name="overview" value="department"/><span className={styles.radioButtonText}>Same Department</span></li>
                <li className={`${overviewCategory == 4 && styles.dropdownSelectorActive}`}><input onChange={()=>{setoverviewCategory(4)}} checked={overviewCategory == 4 && true} className={`${styles.radioButton}`} type="radio" id="reports" name="overview" value="reports"/><span className={styles.radioButtonText}>Same Number of Reports</span></li>
                <li className={`${overviewCategory == 5 && styles.dropdownSelectorActive}`}><input onChange={()=>{setoverviewCategory(5)}} checked={overviewCategory == 5 && true} className={`${styles.radioButton}`} type="radio" id="sector" name="overview" value="sector"/><span className={styles.radioButtonText}>Same Sector</span></li>
              </ul>
            </div>
          </div>
          <button onClick={()=>console.log("Test")} type="submit" className={`${styles.generateReportButton} flex justify-evenly items-center self-center`}>
            <Image src={generateReport} width="auto" height="auto"  alt="generatereportbutton" loading="eager" priority={true}/>
            <label className={`text-white font-semibold text-sm`}>Generate Report</label>
          </button>
        </div>
        <div className={`${styles.feedbackSummaryContainer} flex justify-center`}>
          {dummyData1.map((dummyData, index)=>{
            return(
              <div className={`${styles.feedbackBox}`} key={index}>
              <h1 className={`font-semibold text-white text-base`}>Total # of Feedbacks</h1>
              <h3 className={`font-semibold text-white`}>{dummyData.count}
              {dummyData.percentage >= 0 ? <span className={`${styles.percentageGreen}`}>+{dummyData.percentage}% <span className={`text-xs`}>🡡</span></span>:
              <span className={`${styles.percentageRed}`}>{dummyData.percentage}% <span className={`text-xs text-slate-400`}>🡣</span></span>
              }
              </h3>
              <label className={`${roboto.className}`}>Compared to ({dummyData1.prevCount} last year)</label>
            </div>
            )
          })}
        </div>
        <div className={`${styles.bottomOverviewContentContainer} flex justify-center`}>
          <div className={`${styles.chart}`}>
            <div className={`${styles.chartHeader} flex justify-between`}>
              <h1>Average Leadership Performance Score</h1>
              <ul className={`${styles.timelinePicker} flex items-center content-center`}>
                <li className={`${APLS[0].id == 1 && styles.timeline}`} onClick={()=>{setAPLS(WeeklyData)}}>Weekly</li>
                <li className={`${APLS[0].id == 2 && styles.timeline}`} onClick={()=>{setAPLS(MonthlyData)}}>Monthly</li>
                <li className={`${APLS[0].id == 3 && styles.timeline}`} onClick={()=>{setAPLS(YearlyData)}}>Yearly</li>
              </ul>
            </div>
            <div className={`${styles.lineChart}`}>
              <Line
              data={data}
              options={options}
              ></Line>
            </div>
          </div>
          <div className={`${styles.rightsideChart}`}>
            <div className={`${styles.upperBox} justify-center`}>
              <div className={`${styles.hitRateUpper} flex justify-center`}>
                <div className={`${styles.hitRateBox}`}>
                  <CircularProgressbarWithChildren
                    value={percentage}
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: 'round',
                      // How long animation takes to go from one percentage to another, in seconds
                      pathTransitionDuration: 0.5,
                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',
                      // Colors
                      pathColor: `rgba(30, 117, 255)`,
                      textColor: '#f88',
                      trailColor: '#1c2539',
                    })}
                    >
                      <Image src={shapeHit} className={`${styles.shapeHit}`} width={20} height={20}  alt="hit" loading="eager" priority={true}/>
                  </CircularProgressbarWithChildren>
                </div>
                <div className={`${styles.hitRateText}`}>
                  <h1>{percentage}%</h1>
                  <label className={roboto.className}>Closeout Rate this year</label>
                </div>
              </div>
              <div className={styles.separator}></div>
              <div className={`${styles.hitRateLower} flex justify-center`}>
                <div className={`${styles.hitRateLowerBox}`}>
                  <CircularProgressbarWithChildren
                    value={anotherPercentage}
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: 'round',
                      // How long animation takes to go from one percentage to another, in seconds
                      pathTransitionDuration: 0.5,
                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',
                      // Colors
                      pathColor: `rgba(61, 213, 152)`,
                      textColor: '#f88',
                      trailColor: '#1f2e2f',
                    })}
                    >
                      <Image src={shapeBag} className={`${styles.shapeHit}`}  alt="bag" loading="eager" priority={true}/>
                  </CircularProgressbarWithChildren>
                </div>
                <div className={`${styles.hitRateText}`}>
                  <h1>{anotherPercentage}%</h1>
                  <label className={roboto.className}>Active Managers this year</label>
                </div>
              </div>
            </div>
            <div className={`${styles.allVisitors}`}>
              <div className={`${styles.bottomline}`}>
                <Line
                data={dummydata}
                options={dummyoptions}
                ></Line>
              </div>
              <div className={`${styles.bottomText} flex justify-evenly`}>
                {activeManagers[0].percentage < 2 ? 
                <>
                <h1>{activeManagers[0].count.toLocaleString()}</h1>
                <label className={`text-base text-red-500`}>{activeManagers[0].percentage}% <span className={`text-xs text-slate-400`}>🡣</span></label>
                </>:
                <>
                <h1>{activeManagers[0].count.toLocaleString()}</h1>
                <label className={`text-base text-green-500`}>{activeManagers[0].percentage}% <span className={`text-xs text-green-500`}>🡡</span></label>
                </>
                }
              </div>
              <div className={`${styles.activeManagers}`}>
                <label className={roboto.className}>Active managers this month</label>
              </div>
            </div>
          </div>
        </div>
        {/* End of Overview Content */}
      </div>
    </div>
  );
}