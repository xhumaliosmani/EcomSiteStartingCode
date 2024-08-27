import connect from "@/utils/config/dbConnection";
import { Product } from "@/utils/models/Product";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import User from "@/utils/models/User";


 