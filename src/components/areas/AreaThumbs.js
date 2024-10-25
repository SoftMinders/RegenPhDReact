import React from "react";
import classNames from "classnames";
import {Grid, Stack} from "@mui/material";
import {Button} from "antd";

const AreaThumbs = () => {

	return (
		<section className="mt-160 mb-160">
			<div className="container">
				<h1 className="gradient-text-2 mb-5">We Serve Below Areas</h1>
				<div className="row">
					<div class="col-sm-3">
						<div class="area-thumb">
							<a href="">
								<img src={require('../../assets/Images/area/birmingham.jpg')}/>
								<span>Birmingham</span>
							</a>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="area-thumb">
							<a href="">
								<img src={require('../../assets/Images/area/birmingham.jpg')}/>
								<span>Birmingham</span>
							</a>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="area-thumb">
							<a href="">
								<img src={require('../../assets/Images/area/birmingham.jpg')}/>
								<span>Birmingham</span>
							</a>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="area-thumb">
							<a href="">
								<img src={require('../../assets/Images/area/birmingham.jpg')}/>
								<span>Birmingham</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AreaThumbs;
