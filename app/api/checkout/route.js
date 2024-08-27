import { NextResponse } from "next/server";
import connect from "@/utils/config/dbConnection";
import Order from "@/utils/models/Order";
import { Product } from "@/utils/models/Product";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

