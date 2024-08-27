import connect from '@/utils/config/dbConnection';
import User from '@/utils/models/User';
import bcryptjs from 'bcryptjs';
import {NextResponse, NextRequest} from "next/server";

const DEFAULT_PROFILE_IMAGE =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

