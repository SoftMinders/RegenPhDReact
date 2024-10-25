import React, { useState } from "react";
import SectionHeader from "./partials/SectionHeader";
import { Button } from "antd";
import { PlayCircleFilled } from "@ant-design/icons";
import { PlayCircleOutlined } from "@ant-design/icons";
import Modal from "../elements/Modal";

const SecondHeroSection = () => {
	const [openVideoModal, setOpenVideoModal] = useState(false);

	return (
		<div style={{ paddingTop: 100, paddingBottom: 50, background: "white" }}>
			<div class="container">
				<div class="text-center mb-100">
					<h2 class="gradient-text-2">Transform Your Health Journey: Experience DNA Testing</h2>
					<p>Step into the future with DNA testing. Regularly monitor your health with a bespoke approach tailored to your genetic blueprint, age, and unique needs. Unlock a deeper understanding of your health potential today.</p>
				</div>
				<div class="dna-video mb-160">
					<span onClick={() => setOpenVideoModal(true)}><PlayCircleOutlined /></span>
					<img src={require('../../../assets/Images/dna/dna-video.png')}/>
				</div>
				<Modal
					id="video-modal"
					show={openVideoModal}
					handleClose={() => setOpenVideoModal(false)}
					video={require("../../../assets/videos/dna-video-2.mp4")}
					videoTag="iframe"
				/>
			</div>
		</div>
	);
};

export default SecondHeroSection;
