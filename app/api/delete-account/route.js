import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import connect from "@/utils/config/dbConnection";
import User from "@/utils/models/User";

