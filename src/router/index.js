import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home.vue';
import User from '../components/User.vue';

import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import ForDirective from '../components/ForDirective.vue';

Vue.use( VueRouter );

// User Setting Nav component.
const UserSettingNav = {
  template: `
    <div>
        <router-link to="/settings/email">Email</router-link>
        <router-link to="/settings/profile">Profile</router-link>
    </div>
  `
};

// User setting component.
const UserSetting = {
    template: `
        <div>
            <h2>User Settings</h2>
            <user-setting-nav/>
            <router-view></router-view>
            <router-view name="helper"></router-view>
        </div>
    `,
    components: {
        UserSettingNav
    }
};

// User Email Subscription component.
const UserEmailSubscription = {
    template: `
        <div>
            <h2>Email Subscription</h2>
        </div> 
    `
};

// user profile component.
const UserProfile = {
    template: `
        <div>
            <h2>Edit your profile</h2>
        </div> 
    `
};

const UserProfilePreview = {
    template: `
        <div>
            <h2>Preview your profile.</h2>
        </div> 
    `
};

export default new VueRouter({
    routes: [
        {
            path: '/settings',
            component: UserSetting,
            children: [
                {
                    path: 'email',
                    component: UserEmailSubscription
                },
                {
                    path: 'profile',
                    // 名为 "userProfile" 的路由的路径是
                    // "/settings/profile"
                    name: 'userProfile',
                    components: {
                        default: UserProfile,
                        helper: UserProfilePreview
                    }
                },
                // {
                //     path: 'redirectTarget',
                //     redirect: 'email'
                // }
            ]
        }
    ],
    mode: 'history',
    linkActiveClass: 'link-active'
});