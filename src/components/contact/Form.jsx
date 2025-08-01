const telegramSVG = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.34 9.32013L6.34 2.32013C5.78749 2.04514 5.16362 1.94724 4.55344 2.03978C3.94326 2.13232 3.37646 2.4108 2.93033 2.83724C2.48421 3.26369 2.18046 3.81735 2.0605 4.42274C1.94054 5.02813 2.0102 5.65578 2.26 6.22013L4.66 11.5901C4.71446 11.72 4.74251 11.8593 4.74251 12.0001C4.74251 12.1409 4.71446 12.2803 4.66 12.4101L2.26 17.7801C2.0567 18.2368 1.97076 18.7371 2.00998 19.2355C2.0492 19.7339 2.21235 20.2145 2.48459 20.6338C2.75682 21.0531 3.12953 21.3977 3.56883 21.6363C4.00812 21.875 4.50009 22 5 22.0001C5.46823 21.9955 5.92949 21.8861 6.35 21.6801L20.35 14.6801C20.8466 14.4303 21.264 14.0474 21.5557 13.5742C21.8474 13.101 22.0018 12.556 22.0018 12.0001C22.0018 11.4442 21.8474 10.8993 21.5557 10.4261C21.264 9.95282 20.8466 9.56994 20.35 9.32013H20.34ZM19.45 12.8901L5.45 19.8901C5.26617 19.9784 5.05973 20.0084 4.85839 19.976C4.65705 19.9436 4.47041 19.8504 4.32352 19.709C4.17662 19.5675 4.07648 19.3845 4.03653 19.1846C3.99658 18.9846 4.01873 18.7772 4.1 18.5901L6.49 13.2201C6.52094 13.1484 6.54766 13.075 6.57 13.0001H13.46C13.7252 13.0001 13.9796 12.8948 14.1671 12.7072C14.3546 12.5197 14.46 12.2653 14.46 12.0001C14.46 11.7349 14.3546 11.4806 14.1671 11.293C13.9796 11.1055 13.7252 11.0001 13.46 11.0001H6.57C6.54766 10.9253 6.52094 10.8518 6.49 10.7801L4.1 5.41013C4.01873 5.22309 3.99658 5.01568 4.03653 4.8157C4.07648 4.61572 4.17662 4.43273 4.32352 4.29128C4.47041 4.14982 4.65705 4.05666 4.85839 4.02428C5.05973 3.9919 5.26617 4.02186 5.45 4.11013L19.45 11.1101C19.6138 11.194 19.7513 11.3215 19.8473 11.4786C19.9433 11.6356 19.994 11.8161 19.994 12.0001C19.994 12.1842 19.9433 12.3647 19.8473 12.5217C19.7513 12.6787 19.6138 12.8062 19.45 12.8901Z"
      fill="white"
    />
  </svg>
);

const Form = () => {
  return (
    <div className="">
      <p className="text-[14px] min-sm:text-lg font-normal text-[#87909D]">
        There are many variations of passages of Lorem Ipsu available, but the
        majority have suffered alte.
      </p>
      <div className="mx-2">
        <form className="flex flex-col gap-4 mt-4">
          <label /* Name */ className="floating-label border-0 ">
            <input
              type="text"
              placeholder="Name*"
              className="input input-lg border-0 border-gray-100 w-full"
              required
            />
            <span>Name*</span>
          </label>
          <label /* Email */ className="floating-label border-none ">
            <input
              type="email"
              placeholder="Email*"
              className="input input-lg border-0 border-gray-100 w-full"
              required
            />
            <span>Email*</span>
          </label>
          <label /* Location */ className="floating-label border-0 ">
            <input
              type="text"
              placeholder="Location*"
              className="input input-lg border-0 border-gray-100 w-full"
              required
            />
            <span>Location*</span>
          </label>

          <div className="flex">
            <label /* Budget */ className="floating-label border-0 w-[35%]">
              <input
                type="text"
                placeholder="Budget*"
                className="input input-lg border-0 border-gray-100 "
                required
              />
              <span>Budget*</span>
            </label>
            <label
              /* Subject */ className="floating-label border-0 w-full ms-6"
            >
              <input
                type="text"
                placeholder="Subject*"
                className="input input-lg border-0 border-gray-100 w-full"
                required
              />
              <span>Subject*</span>
            </label>
          </div>

          <label /* Message */ className="floating-label border-0 ">
            <input
              type="text"
              placeholder="Message*"
              className="input input-lg border-0 border-gray-100 w-full"
              required
            />
            <span>Message*</span>
          </label>
          <button
            type="submit"
            className="btn flex gap-3 btn-primary text-[16px] font-semibold w-35.25 h-12 rounded-sm mt-5 max-sm:12.5 min-[1032px]:mt-12.5"
          >
            Submit {telegramSVG}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
