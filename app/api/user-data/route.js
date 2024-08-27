import connect from "@/utils/config/dbConnection";
import { NextResponse } from "next/server";
import User from "@/utils/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

